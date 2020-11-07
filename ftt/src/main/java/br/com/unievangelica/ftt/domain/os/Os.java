package br.com.unievangelica.ftt.domain.os;

import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import br.com.unievangelica.ftt.core.enuns.EnfestoEnum;
import br.com.unievangelica.ftt.core.enuns.StatusEnum;
import br.com.unievangelica.ftt.domain.colecao.Colecao;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "os")
public class Os extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @NotEmpty
    @NotBlank
    @Column(name = "tpmodelo", length = 80, nullable = false)
    private String tpmodelo;

    @NotEmpty
    @NotBlank
    @Column(name = "nomemodelo", length = 80, nullable = false)
    private String nomemodelo;

    @NotEmpty
    @NotBlank
    @Column(name = "matrizref", length = 80, nullable = false)
    private String matrizref;

    @Enumerated(EnumType.STRING)
    @Column(name = "enfesto")
    private EnfestoEnum enfesto;

    @NotNull
    @JsonFormat(pattern="yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(value = TemporalType.DATE)
    @Column(name = "dataInicial")
    private Date dataInicial;

    @NotNull
    @JsonFormat(pattern="yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(value = TemporalType.DATE)
    @Column(name = "dataFinal")
    private Date dataFinal;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private StatusEnum status;

    @NotEmpty
    @NotBlank
    @Column(name = "tecido", length = 80, nullable = false)
    private String tecido;

    @NotEmpty
    @NotBlank
    @Column(name = "laguratecido", length = 5, nullable = false)
    private String laguratecido;

    @NotEmpty
    @NotBlank
    @Column(name = "composicaotecido", length = 80, nullable = false)
    private String composicaotecido;

    @ManyToOne
    @JoinColumn(name = "colecao_id", referencedColumnName = "id")
    private Colecao colecao;

    public Colecao getColecao() {
        return colecao;
    }

    public void setColecao(Colecao colecao) {
        this.colecao = colecao;
    }
    
    public String getTpmodelo() {
        return tpmodelo;
    }

    public String getNomemodelo() {
        return nomemodelo;
    }

    public String getMatrizref() {
        return matrizref;
    }

    public EnfestoEnum getEnfesto() {
        return enfesto;
    }

    public String getTecido() {
        return tecido;
    }

    public String getLaguratecido() {
        return laguratecido;
    }

    public String getComposicaotecido() {
        return composicaotecido;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setTpmodelo(String tpmodelo) {
        this.tpmodelo = tpmodelo;
    }

    public void setNomemodelo(String nomemodelo) {
        this.nomemodelo = nomemodelo;
    }

    public void setMatrizref(String matrizref) {
        this.matrizref = matrizref;
    }

    public void setEnfesto(EnfestoEnum enfesto) {
        this.enfesto = enfesto;
    }

    public void setTecido(String tecido) {
        this.tecido = tecido;
    }

    public void setLaguratecido(String laguratecido) {
        this.laguratecido = laguratecido;
    }

    public void setComposicaotecido(String composicaotecido) {
        this.composicaotecido = composicaotecido;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }

    public void setDataInicial(Date dataInicial) {
        this.dataInicial = dataInicial;
    }

    public void setDataFinal(Date dataFinal) {
        this.dataFinal = dataFinal;
    }

    public Date getDataInicial() {
        return dataInicial;
    }

    public Date getDataFinal() {
        return dataFinal;
    }

}
