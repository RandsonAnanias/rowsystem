package br.com.unievangelica.ftt.domain.carro;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import br.com.unievangelica.ftt.domain.garagem.Garagem;

@Entity
@Table(name = "carro")
public class Carro extends AbstractEntity{
	
	private static final long serialVersionUID = 1L;
	
	@NotEmpty
	@Column(name = "fabricante", length = 50, nullable = false)
	private String fabricante;
	
	@NotEmpty
	@Column(name = "modelo", length = 30, nullable = false)
	private String modelo;
	
	@NotEmpty
	@Column(name = "versao", length = 20, nullable = false)
	private String versao;
	
	@NotEmpty
	@Column(name = "descricao", length = 100, nullable = false)
	private String descricao;
	
	@NotEmpty
	@Column(name = "cor", length = 15, nullable = false)
	private String cor;
	
	@NotEmpty
	@Column(name = "valor", length = 10, nullable = false)
	private String valor;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "garagem_id", referencedColumnName = "id")
	private Garagem garagem;

	public String getFabricante() {
		return fabricante;
	}

	public void setFabricante(String fabricante) {
		this.fabricante = fabricante;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getVersao() {
		return versao;
	}

	public void setVersao(String versao) {
		this.versao = versao;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public Garagem getGaragem() {
		return garagem;
	}

	public void setGaragem(Garagem garagem) {
		this.garagem = garagem;
	}


}
