<?php


namespace App\Command;

use App\Entity\Article;
use App\Entity\Category;
use Doctrine\DBAL\DBALException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use SimpleXMLElement;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use \Doctrine\ORM\EntityManager;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Validator\Constraints\DateTime;

/**
 *
 * Description de la Command de fluxRssArticleCategory :
 *
 * Command qui gére la récupération du flux Rss des entity Article et Category.
 *
 * Class fluxRssArticleCategoryCommand
 * @package App\Command
 */
class fluxRssArticleCommand extends Command
{

    protected static $defaultName = 'app:rssArticleCategory';

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * fluxRssArticleCategoryCommand constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct();
        $this->entityManager = $entityManager;
    }


    /**
     *
     * Fonction d'éxecution de la command pour la récupération du FluxRss concernant Article et Category.
     *
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return
     * @throws DBALException
     * @throws \Exception
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {

        /** Déclaration de l'entityManager */
        $doctrine = $this->entityManager;
        /** L'url du flux Rss */
        $urlHome = "https://www.terredevins.com/feed";
        /** Déclaration d'unenouvelle instance de la classe SimpleXMLElement */
        $xmlHome = new SimpleXMLElement($urlHome, null, true);
        /**  */
        $nsHome = $xmlHome->getNamespaces(true);
        /** Déclaration de l'entityManager */
        $fluxRssHome = simplexml_load_file($urlHome);
        /** Déclaration de l'entityManager */
        $itemsHome = $fluxRssHome->channel->item;

        foreach($itemsHome as $item ) {

            $title = $item->title;
            $link = $item->link;
            $comments = $item->comments;
            $pubDate = $item->pubDate;
            $pubDateFinal = date('Y-m-d', strtotime($pubDate));
            $dc = $item->children($nsHome['dc']);
            $categories = array();
            foreach ($item->category as $category) {
                $categories[] = $doctrine
                    ->getRepository(Category::class)
                    ->findCategoryByName($category->__toString());
            }
            $guid = $item->guid;
            $description = $item->description;
            $content = $item->children($nsHome['content']);
            $wfw = $item->children($nsHome['wfw']);
            $slash = $item->children($nsHome['slash']);

            $articleUpdate = $doctrine
                ->getRepository(Article::class)
                ->findArticleByTitle($title->__toString());

            if (($articleUpdate === False)) {

                $article = new Article();
                foreach ($categories as $category) {
                    $article->addCategory($category);
                }

                $article->setTitle($title);
                $article->setLink($link);
                $article->setComments($comments);
                $article->setPubDate(new \DateTime($pubDateFinal));
                $article->setCreator($dc);
                $article->setGuid($guid);
                $article->setDescription($description);
                $article->setContent($content);
                $article->setCommentRss($wfw);
                $article->setCommentsSlash($slash);

                // tells Doctrine you want to (eventually) save the Article (no queries yet)
                $doctrine->persist($category);
                $doctrine->persist($article);
                // actually executes the queries (i.e. the INSERT query)
                $doctrine->flush();
                $output->writeln('Récupération des Articles et leurs Categorys !');
            }
        }

        return 0;
    }


}
