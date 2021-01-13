package com.Yugen.urjc.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Yugen.urjc.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
}