package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/* jid int PRIMARY KEY auto_increment, chasis_no,customer_name,customer_email,
 * date,mechanic_assigned,mobile_no,model,service_type,suggested_work,vehicle_no */
@Entity
@Table(name = "job_card")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JobCard extends BaseEntity {
//	@NotBlank(message="Enter customer name")
	@Column(name="cust_name",length=60)
	private String custName;
//	@Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
//			+ "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$", message = "Blank or Invalid Email Id : must contain '@' & '.com' ")
	@Column(name="cust_email",length=60)
	private String custEmail;
//	@NotEmpty(message = "Mobile no is Mandetory")
//	@Length(min = 10, max = 13, message = "Mobile no must contain 10 digit")
	@Column(name="mobile_no",length=60)
	private String mobileNo;
	private LocalDate date;
//	@NotEmpty(message="Enter vehicle model")
	@Column(name="vehicle_model",length=60)
	private String vehicleModel;
//	@NotEmpty(message="Enter vehicle no")
	@Column(name="vehicle_no",length=60)
	private String vehicleNo;
//	@NotEmpty(message="Enter chasis no")
	@Column(name="chasis_no",length=60)
	private String chasisNo;
//	@NotNull(message="Select service type")
	@Enumerated(EnumType.STRING)
	@Column(name="service_type")
	private Services serviceType;
//	@NotEmpty(message="Enter  work  details")
	@Column(name="suggested_work",length=400)
	private String suggestedWork;
//	@NotEmpty(message="Enter mechanic name")
	@Column(name="mechanic_assigned",length=40)
	private String mechanicAssigned;
	private boolean isActive;
}
