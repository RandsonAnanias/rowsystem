package br.com.unievangelica.ftt.domain.colecao;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import br.com.unievangelica.ftt.domain.endereco.Endereco;

@Entity
@Table(name = "colecao")
public class Colecao extends AbstractEntity{

    private static final long serialVersionUID = 1L;

    @NotEmpty
    @NotBlank
    @Column(name = "nome", length = 50, nullable = false)
    private String nome;

    @NotEmpty
    @NotBlank
    @Column(name = "datacriacao")
    private Date datacriacao;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }


    public Date getDatacriacao() {
        return datacriacao;
    }

    public void setNome(Date datacriacao) {
        this.datacriacao = datacriacao;
    }

}