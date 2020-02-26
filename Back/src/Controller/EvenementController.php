<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Category;
use App\Entity\Evenement;
use SimpleXMLElement;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class EvenementController extends AbstractController
{

    /**
     * @Route("/AllEvenement", name="AllEvenement")
     */

    public function findAllEvenement()
    {

        $evenements = $this->getDoctrine()
            ->getRepository(Evenement::class)
            ->findAll();

        if (!$evenements) {
            // cause the 404 page not found to be displayed
            throw $this->createNotFoundException();
        }

        return $this->render('rss/Evenement/Evenements.html.twig', array(
            'rssEvenements' => $evenements
        ));
    }

    /**
     * @Route("/Evenement/{$title}", name="Evenement")
     * @param $title
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function findOneEvenement($title)
    {

        $evenements = $this->getDoctrine()
            ->getRepository(Article::class)
            ->findoneBy(array('title'=>$title));

        if (!$evenements) {
            // cause the 404 page not found to be displayed
            throw $this->createNotFoundException();
        }

        return $this->render('rss/Evenement/Evenement.html.twig', array(
            'evenements' => $evenements
        ));
    }

/*
    public function rss()
    {
        $rss = new DOMDocument();
        $rss->load('https://www.terredevins.com/feed');
        $encoded = array();
        $limit=50;
        foreach ($rss->getElementsByTagName('encoded') as $node)
        {
            $item = $node->getElementsByTagName('img')->item(0)->value;
            array_push($encoded, $item);
        }
        for($x=0;$x<$limit;$x++) {
            echo 'IMG -> '.$encoded[$x].'</br></br>';
        }
        return $this->render('rss/rss.html.twig', array(
            'rss' => $rss->channel->item,
        ));
    }
    */
}
