<?php

namespace App\Controller;


use App\Entity\Oenotourisme;
use App\Repository\OenotourismeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class OenotourismeController extends AbstractController
{

    /**
     * @Route("/oenotourismes", name="evenements", methods={"GET"})
     * @param OenotourismeRepository $oenotourismeRepository
     * @return Response
     *
     * Description :
     * Récupère tous les oenotourismes de la base de donnée pour les retourner sous forme de tableau d'objet au format json
     */
    public function findOenotourismes(OenotourismeRepository $oenotourismeRepository)
    {

        $oenotourisme = $oenotourismeRepository->findAll();
        /** organise les oenotourisme sous forme de tableau au format json */
        $data = $this->get('serializer')->serialize($oenotourisme, 'json',['groups' => ['evenement']]);

        $response = new Response($data);
        /** precise dans le header le format "json" */
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("/oenotourisme/{id}", name="oenotourisme", methods={"GET"})
     * @param Oenotourisme $oenotourisme
     * @return Response
     *
     * Description :
     * Recupere un oenotourisme avec son id  et retourne un objet json
     */
    public function findOneOenotourisme(Oenotourisme $oenotourisme)
    {
        $data = $this->get('serializer')->serialize($oenotourisme, 'json',['groups' => ['oenotourisme']]);

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
