<?php

namespace App\Repository;

use App\Entity\Oenotourisme;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
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

    // /**
    //  * @return Oenotourisme[] Returns an array of Oenotourisme objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Oenotourisme
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
