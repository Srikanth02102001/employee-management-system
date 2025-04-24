package com.miniProject.miniproject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miniProject.miniproject.Enity.Employee;
import com.miniProject.miniproject.Service.EmployeeService;

import jakarta.persistence.EntityNotFoundException;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class EmployeeController {
	@Autowired
	private  EmployeeService employeeService;
	
	@PostMapping("/employee")
	public Employee postEmployee(@RequestBody Employee employee) {
		return employeeService.postEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmpolyees(){
		return employeeService.getAllEmployees();
	}
	
   @DeleteMapping("/employee/{id}")
   public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
	   try {
		employeeService.deleteEmployee(id);
		return  new ResponseEntity<>("Employee With id"+id+" Deleted Successfully",HttpStatus.OK);
	} catch (EntityNotFoundException e) {
		 return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
	}
   }
   
   @GetMapping("/employee/{id}")
   public ResponseEntity<?> getEmployee(@PathVariable Long id){
	   Employee emp = employeeService.getEmployeeById(id);
	   
	   if(emp==null) {
		   return ResponseEntity.notFound().build();
	   }
	   else  return ResponseEntity.ok(emp);
   }
   
   @PatchMapping("/employee/{id}")
  public ResponseEntity<?> updateEmployee(@PathVariable Long id,@RequestBody Employee employee){
	Employee emp=  employeeService.updateEmployee(id, employee);
	if(emp ==null) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
	}
	return ResponseEntity.ok(emp);
  }
}
