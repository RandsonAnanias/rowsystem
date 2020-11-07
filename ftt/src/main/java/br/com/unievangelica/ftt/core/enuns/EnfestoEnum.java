package br.com.unievangelica.ftt.core.enuns;

public enum EnfestoEnum {
    UNICO("Único"),
    DUPLO("Duplo");

    private String enfestodescricao;

     EnfestoEnum(String enfestodescricao){
         this.enfestodescricao = enfestodescricao;
     }
    public String getEnfestodescricao(){
        return enfestodescricao;
    }

}
