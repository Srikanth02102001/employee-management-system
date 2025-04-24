package com.miniProject.miniproject.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miniProject.miniproject.Enity.Employee;
import com.miniProject.miniproject.Repo.EmployeeRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service

public class EmployeeService {
	
	@Autowired
	private  EmployeeRepository empRepo;
	
	public Employee postEmployee(Employee emp) {
		return empRepo.save(emp);
	}
	
	public List<Employee> getAllEmployees(){
		return empRepo.findAll();
	}

	public void deleteEmployee(Long id) {
		if(!empRepo.existsById(id)) {
			throw new EntityNotFoundException("Employee With ID"+id+" not found");
		}
		empRepo.deleteById(id); 
	}
	
	public Employee getEmployeeById(Long id) {
		
		return empRepo.findById(id).orElse(null);
		
	}
	
	 public Employee updateEmployee(Long id,Employee employee) {
		   Optional<Employee> emp =empRepo.findById(id);
		   if(emp.isPresent()) {
			  Employee existsEmp=emp.get();
			  existsEmp.setEmail(employee.getEmail());
			  existsEmp.setName(employee.getName());
			  existsEmp.setPhone(employee.getPhone());
			  existsEmp.setDepartment(employee.getDepartment());
			  
			  return empRepo.save(existsEmp);
		   }
		   return null;
		   
	   }

}
