<?php


class Ponente
{

    private $nombre;
    private $telefono;
    private $mail;
    private $eventos = array();

    /**
     * Ponente constructor.
     */
    public function __construct()
    {
    }

    /**
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * @param mixed $nombre
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    /**
     * @return mixed
     */
    public function getTelefono()
    {
        return $this->telefono;
    }

    /**
     * @param mixed $telefono
     */
    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }

    /**
     * @return mixed
     */
    public function getMail()
    {
        return $this->mail;
    }

    /**
     * @param mixed $mail
     */
    public function setMail($mail)
    {
        $this->mail = $mail;
    }

    /**
     * @return mixed
     */
    public function getEventos()
    {
        return $this->eventos;
    }

    /**
     * @param mixed $eventos
     */
    public function setEventos($eventos)
    {
        $this->eventos = $eventos;
    }



    public function addEvento(){
        $eventos = new Evento();
    }

}