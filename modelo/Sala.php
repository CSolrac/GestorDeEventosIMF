<?php


class Sala
{

    private $numero;
    private $aforo;

    /**
     * sala constructor.
     */
    public function __construct()
    {
    }

    /**
     * @return mixed
     */
    public function getNumero()
    {
        return $this->numero;
    }

    /**
     * @param mixed $numero
     */
    public function setNumero($numero)
    {
        $this->numero = $numero;
    }

    /**
     * @return mixed
     */
    public function getAforo()
    {
        return $this->aforo;
    }

    /**
     * @param mixed $aforo
     */
    public function setAforo($aforo)
    {
        $this->aforo = $aforo;
    }




}