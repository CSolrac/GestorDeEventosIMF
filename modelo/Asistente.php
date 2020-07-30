<?php


class Asistente
{

    private $name;
    private $mail;
    private $invitaciones = array();

    /**
     * Asistente constructor.
     */
    public function __construct()
    {
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
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




    public function addInvitacion(){
        $invitaciones = new Invitacion();
    }

}