package br.com.unievangelica.ftt.domain.pais;

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
@Table(name = "pais")
public class Pais extends AbstractEntity{
	
	private static final long serialVersionUID = 1L;
	
	@NotEmpty	@NotBlank
	@Column(name = "nome", length = 80, nullable = false) 
	private String nome;
	
	@JsonIgnore
	@OneToMany(mappedBy = "pais")
	private List<Endereco> enderecos;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Endereco> getEnderecos() {
		return enderecos;
	}

	public void setEnderecos(List<Endereco> enderecos) {
		this.enderecos = enderecos;
	}
	
}
