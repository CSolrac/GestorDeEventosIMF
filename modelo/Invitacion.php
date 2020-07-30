<?php


class Invitacion
{

    private $asistente;
    private $referencia;
    private $confirmacion;
    private $evento;

    /**
     * Invitacion constructor.
     */
    public function __construct()
    {
    }

    /**
     * @return mixed
     */
    public function getAsistente()
    {
        return $this->asistente;
    }

    /**
     * @param mixed $asistente
     */
    public function setAsistente($asistente)
    {
        $this->asistente = $asistente;
    }

    /**
     * @return mixed
     */
    public function getReferencia()
    {
        return $this->referencia;
    }

    /**
     * @param mixed $referenca
     */
    public function setReferenca($referencia)
    {
        $this->referenca = $referencia;
    }

    /**
     * @return mixed
     */
    public function getConfirmacion()
    {
        return $this->confirmacion;
    }

    /**
     * @param mixed $confirmacion
     */
    public function setConfirmacion($confirmacion)
    {
        $this->confirmacion = $confirmacion;
    }

    /**
     * @return mixed
     */
    public function getEvento()
    {
        return $this->evento;
    }

    /**
     * @param mixed $evento
     */
    public function setEvento($evento)
    {
        $this->evento = $evento;
    }





    public function addAsistente(){

        $asistente = new Asistente();

    }

}