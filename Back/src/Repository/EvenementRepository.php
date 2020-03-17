<?php

namespace App\Repository;

use App\Entity\Evenement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @method Evenement|null find($id, $lockMode = null, $lockVersion = null)
 * @method Evenement|null findOneBy(array $criteria, array $orderBy = null)
 * @method Evenement[]    findAll()
 * @method Evenement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EvenementRepository extends ServiceEntityRepository
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Evenement::class); // recupere le __construct parent
        $this->entityManager = $entityManager; // creer une entite pour se connecter a la base
    }

    public function findEvenementByTitle($value)
    {// Trouver un evenement par son titre ($value)

        $doctrine = $this->entityManager; // pour se connecter a doctrine

        $evenementUpdate = $doctrine
            ->getRepository(Evenement::class) // Verifie si l'article existe deja
            ->findOneBy(['title' => $value]); // Trouver 1 article pour titre=$value

        if (is_null($evenementUpdate)) { // si pas de titre pour la valeur, return faux
            return False;
        }
        else{
            return True;
        }
    }
}
