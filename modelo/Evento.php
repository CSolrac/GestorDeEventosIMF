<?php


class Evento
{

    private $nombre;
    private $fecha;
    private $hora;
    private $foto;
    private $sala;
    private $ponentes = array();
    private $invitaciones = array();

    /**
     * Evento constructor.
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
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * @param mixed $fecha
     */
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    /**
     * @return mixed
     */
    public function getHora()
    {
        return $this->hora;
    }

    /**
     * @param mixed $hora
     */
    public function setHora($hora)
    {
        $this->hora = $hora;
    }

    /**
     * @return mixed
     */
    public function getFoto()
    {
        return $this->foto;
    }

    /**
     * @param mixed $foto
     */
    public function setFoto($foto)
    {
        $this->foto = $foto;
    }

    /**
     * @return mixed
     */
    public function getSala()
    {
        return $this->sala;
    }

    /**
     * @param mixed $sala
     */
    public function setSala($sala)
    {
        $this->sala = $sala;
    }

    /**
     * @return array
     */
    public function getPonentes()
    {
        return $this->ponentes;
    }

    /**
     * @param array $ponentes
     */
    public function setPonentes($ponentes)
    {
        $this->ponentes = $ponentes;
    }

    /**
     * @return array
     */
    public function getInvitaciones()
    {
        return $this->invitaciones;
    }

    /**
     * @param array $invitaciones
     */
    public function setInvitaciones($invitaciones)
    {
        $this->invitaciones = $invitaciones;
    }



    public function addSala(){
        $sala = new Sala();
    }

    public function addPonente(){
        $ponentes = new Ponente();
    }

    public function addInvitaciones(){
        $invitaciones = new Invitacion();
    }

}