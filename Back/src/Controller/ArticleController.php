<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Category;
use SimpleXMLElement;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends AbstractController
{

    /**
     * @Route("/AllArticle", name="AllArticle")
     */
    public function findAllArticle()
    {

        $articles = $this->getDoctrine()
            ->getRepository(Article::class)
            ->findAll();

        if (!$articles) {
            // cause the 404 page not found to be displayed
            throw $this->createNotFoundException();
        }

        return $this->render('rss/Article/Articles.html.twig', array(
            'articles' => $articles
        ));
    }

    /**
     * @Route("/Article/{$id}", name="Article")
     * @param $title
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function findOneArticle($id)
    {

        $articles = $this->getDoctrine()
            ->getRepository(Article::class)
            ->findoneBy(array('id'=>$id));

        if (!$articles) {
            // cause the 404 page not found to be displayed
            throw $this->createNotFoundException();
        }

        return $this->render('rss/Article/Article.html.twig', array(
            'articles' => $articles
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
