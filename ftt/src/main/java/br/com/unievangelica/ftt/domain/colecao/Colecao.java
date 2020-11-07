package br.com.unievangelica.ftt.domain.colecao;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import br.com.unievangelica.ftt.domain.garagem.Garagem;
import br.com.unievangelica.ftt.domain.os.Os;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import br.com.unievangelica.ftt.domain.endereco.Endereco;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "colecao")
public class Colecao extends AbstractEntity{

    private static final long serialVersionUID = 1L;

    @NotEmpty
    @NotBlank
    @Column(name = "nome", length = 50, nullable = false)
    private String nome;

    @NotNull
    @JsonFormat(pattern="yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(value = TemporalType.DATE)
    @Column(name = "datacriacao")
    private Date datacriacao;


    public List<Os> getOs() {
        return os;
    }

    public void setOs(List<Os> os) {
        this.os = os;
    }

    @JsonIgnore
    @OneToMany(mappedBy = "colecao")
    private List<Os> os;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }


    public Date getDatacriacao() {
        return datacriacao;
    }

    public void setDatacriacao(Date datacriacao) {
        this.datacriacao = datacriacao;
    }

}