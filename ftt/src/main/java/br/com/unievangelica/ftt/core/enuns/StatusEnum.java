package br.com.unievangelica.ftt.core.enuns;

public enum StatusEnum {

    ANDAMENTO("andamento"),
    FINALIZADO("Finalizado");

    private String statusdescricao;

    StatusEnum(String statusdescricao){
        this.statusdescricao = statusdescricao;
    }

    public String getStatusdescricao(){
        return statusdescricao;
    }
}
