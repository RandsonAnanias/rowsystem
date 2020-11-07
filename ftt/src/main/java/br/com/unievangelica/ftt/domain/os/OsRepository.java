package br.com.unievangelica.ftt.domain.os;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OsRepository  extends JpaRepository<Os, Long> {
}
