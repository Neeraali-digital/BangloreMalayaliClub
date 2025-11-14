import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MembershipForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  occupation: string;
  membershipType: 'Individual' | 'Family' | 'Student' | 'Senior Citizen';
  interests: string[];
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  agreeToTerms: boolean;
}

@Component({
  selector: 'app-membership-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './membership-form.component.html',
  styleUrls: ['./membership-form.component.scss']
})
export class MembershipFormComponent {
  membershipForm: MembershipForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    occupation: '',
    membershipType: 'Individual',
    interests: [],
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    },
    agreeToTerms: false
  };

  membershipTypes = [
    { value: 'Individual', label: 'Individual Membership', fee: '₹500/year' },
    { value: 'Family', label: 'Family Membership', fee: '₹1000/year' },
    { value: 'Student', label: 'Student Membership', fee: '₹250/year' },
    { value: 'Senior Citizen', label: 'Senior Citizen Membership', fee: '₹300/year' }
  ];

  availableInterests = [
    'Cultural Events',
    'Sports Activities',
    'Educational Programs',
    'Charity & Social Work',
    'Networking Events',
    'Language Classes',
    'Arts & Crafts',
    'Music & Dance'
  ];

  isSubmitting = false;
  submitSuccess = false;

  onInterestChange(interest: string, event: Event) {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;
    if (checked) {
      this.membershipForm.interests.push(interest);
    } else {
      const index = this.membershipForm.interests.indexOf(interest);
      if (index > -1) {
        this.membershipForm.interests.splice(index, 1);
      }
    }
  }

  isInterestSelected(interest: string): boolean {
    return this.membershipForm.interests.includes(interest);
  }

  setMembershipType(value: string) {
    this.membershipForm.membershipType = value as 'Individual' | 'Family' | 'Student' | 'Senior Citizen';
  }

  getSelectedMembershipType() {
    return this.membershipTypes.find(type => type.value === this.membershipForm.membershipType);
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.isSubmitting = true;

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        console.log('Membership form submitted:', this.membershipForm);
      }, 2000);
    } else {
      alert('Please fill in all required fields and agree to the terms.');
    }
  }

  isFormValid(): boolean {
    const form = this.membershipForm;
    return !!(
      form.firstName &&
      form.lastName &&
      form.email &&
      form.phone &&
      form.dateOfBirth &&
      form.address &&
      form.city &&
      form.state &&
      form.pincode &&
      form.occupation &&
      form.emergencyContact.name &&
      form.emergencyContact.phone &&
      form.emergencyContact.relationship &&
      form.agreeToTerms
    );
  }

  resetForm() {
    this.membershipForm = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      occupation: '',
      membershipType: 'Individual',
      interests: [],
      emergencyContact: {
        name: '',
        phone: '',
        relationship: ''
      },
      agreeToTerms: false
    };
    this.submitSuccess = false;
  }
}
