<?php

namespace App\Repository;

use App\Entity\Oenotourisme;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 *
 * Description du Répository de l'Oenotourisme :
 *
 * Aucune méthode défini
 *
 * @method Oenotourisme|null find($id, $lockMode = null, $lockVersion = null)
 * @method Oenotourisme|null findOneBy(array $criteria, array $orderBy = null)
 * @method Oenotourisme[]    findAll()
 * @method Oenotourisme[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OenotourismeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Oenotourisme::class);
    }
}
