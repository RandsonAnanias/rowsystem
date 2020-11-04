package br.com.unievangelica.ftt.domain.garagem;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import br.com.unievangelica.ftt.domain.carro.Carro;
import br.com.unievangelica.ftt.domain.endereco.Endereco;

@Entity
@Table(name = "garagem")
public class Garagem extends AbstractEntity{
	
	private static final long serialVersionUID = 1L;
	

	@NotEmpty
	@NotBlank
	@Column(name = "nome", length = 80, nullable = false)
	private String nome;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "endereco_id", referencedColumnName = "id")
	private Endereco endereco;
	
	@JsonIgnore
	@OneToMany(mappedBy = "garagem")
	private List<Carro> carro;
	
	public List<Carro> getCarro() {
		return carro;
	}

	public void setCarro(List<Carro> carro) {
		this.carro = carro;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

}
