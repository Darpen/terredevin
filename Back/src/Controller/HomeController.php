<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Category;
use App\Entity\Evenement;
use DOMDocument;
use SimpleXMLElement;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/home", name="home")
     */
    public function home()
    {
        $evenements = $this->getDoctrine()
            ->getRepository(Evenement::class)
            ->findAll();

        $articles = $this->getDoctrine()
            ->getRepository(Article::class)
            ->findAll();

        $categorys = $this->getDoctrine()
            ->getRepository(Article::class)
            ->findAll();

        return $this->render('rss/Home.html.twig', array(
            'articles' => $articles, 'evenements' => $evenements, 'categorys' => $categorys
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
