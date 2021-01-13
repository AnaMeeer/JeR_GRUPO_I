package com.Yugen.urjc.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Yugen.urjc.model.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long>{

}
