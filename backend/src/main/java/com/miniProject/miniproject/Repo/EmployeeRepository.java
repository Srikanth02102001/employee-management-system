package com.miniProject.miniproject.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.miniProject.miniproject.Enity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>  {

}
