<?php

namespace App\Repository;

use App\Entity\Article;
use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @method Category|null find($id, $lockMode = null, $lockVersion = null)
 * @method Category|null findOneBy(array $criteria, array $orderBy = null)
 * @method Category[]    findAll()
 * @method Category[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryRepository extends ServiceEntityRepository
{
    private $entityManager;

    public function __construct(ManagerRegistry $registry,EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Category::class); // recupere le __construct parent 
        $this->entityManager = $entityManager; // creer une entite pour se connecter a la base
    }

    public function findCategoryByName($value)
    {// Trouver une categorie par son nom ($value)

        $doctrine = $this->entityManager; // pour se connecter a doctrine

           $categoryUpdate = $doctrine
               ->getRepository(Category::class) // Verifie si la categorie existe deja
               ->findOneBy(['name' => $value]); // Trouver 1 categorie a nom=$value

        if(is_null($categoryUpdate)) { // si pas de nom de categorie existant pour la valeur
            $category = new Category(); // Creation d'une nouvelle categorie
            $category->setName($value); // Assignation du nom a cette nouvelle categorie

            // tells Doctrine you want to (eventually) save the Article (no queries yet)
            $doctrine->persist($category);
            // actually executes the queries (i.e. the INSERT query)
            $doctrine->flush();
            return $category;
        }
    return $categoryUpdate;

    }
}
