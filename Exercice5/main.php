<?php

class ConcertTicket
{
    public $artistName;
    public $concertPlace;
    public $dateOfConcert;
    public $placeNumber;
    public $clientName;

    function __construct($artistName, $concertPlace, $dateOfConcert, $placeNumber, $clientName = null)
    {

        $this->artistName = $artistName;
        $this->concertPlace = $concertPlace;
        $this->dateOfConcert = $dateOfConcert;
        $this->placeNumber = $placeNumber;
        if (!is_null($clientName)) {
            $this->clientName = $clientName;
        }
    }

    function htmlDetails()
    {
        $htmlDetails = "
    <p>Artiste : $this->artistName </p>
    <p>Lieu du concert : $this->concertPlace </p>
    <p>Date du concert : $this->dateOfConcert </p>
    <p>Lieu du concert : $this->placeNumber </p>
    ";
        if (!is_null($this->name)) {
            $htmlDetails = $htmlDetails + "<p>Détenteur du ticket : $this->clientName </p>";
        }
        return $htmlDetails;
    }
}
$ticket01 = new ConcertTicket("Mika", "12/02/2020", "Marseille", "1", "Madina");
echo ($ticket01->htmlDetails());
