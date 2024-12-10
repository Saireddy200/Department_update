import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom'; // Added useNavigate
import './Apply.css';

// Validation schemas for each step
const stepValidationSchemas = [
  Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
  }),
  Yup.object().shape({
    address: Yup.string().required('Address is required'),
    school: Yup.string().required('Current school is required'),
    major: Yup.string().required('Field of study is required'),
  }),
  Yup.object().shape({
    gpa: Yup.number().required('GPA is required').min(0, 'GPA cannot be less than 0'),
    statement: Yup.string(),
  }),
];

function Apply() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to handle redirection
  const params = new URLSearchParams(location.search);
  const scholarshipName = params.get('name');

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = (values, setTouched, validateForm) => {
    validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        setTouched(errors);
      }
    });
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (values) => {
    // Simulating backend call and success response
    console.log('Submitted values:', values);

    // Increment "applied" and "pending" counts
    const appliedCount = Number(localStorage.getItem('appliedCount') || 0) + 1;
    const pendingCount = Number(localStorage.getItem('pendingCount') || 0) + 1;

    localStorage.setItem('appliedCount', appliedCount);
    localStorage.setItem('pendingCount', pendingCount);

    // Display success message and redirect to the dashboard
    alert('Application submitted successfully!');
    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <div className="apply-page">
      <h2>Apply for {scholarshipName}</h2>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          address: '',
          school: '',
          major: '',
          gpa: '',
          statement: '',
        }}
        validationSchema={stepValidationSchemas[currentStep]}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, isSubmitting, setTouched, validateForm }) => (
          <Form className="apply-form">
            {currentStep === 0 && (
              <div>
                <div>
                  <label htmlFor="fullName">
                    Full Name <span className="required">*</span>
                  </label>
                  <Field name="fullName" />
                  <ErrorMessage name="fullName" component="div" />
                </div>
                <div>
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <Field name="email" type="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <label htmlFor="phone">
                    Phone Number <span className="required">*</span>
                  </label>
                  <Field name="phone" />
                  <ErrorMessage name="phone" component="div" />
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div>
                <div>
                  <label htmlFor="address">
                    Address <span className="required">*</span>
                  </label>
                  <Field name="address" />
                  <ErrorMessage name="address" component="div" />
                </div>
                <div>
                  <label htmlFor="school">
                    Current School <span className="required">*</span>
                  </label>
                  <Field name="school" />
                  <ErrorMessage name="school" component="div" />
                </div>
                <div>
                  <label htmlFor="major">
                    Field of Study <span className="required">*</span>
                  </label>
                  <Field name="major" />
                  <ErrorMessage name="major" component="div" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <div>
                  <label htmlFor="gpa">
                    GPA <span className="required">*</span>
                  </label>
                  <Field name="gpa" type="number" />
                  <ErrorMessage name="gpa" component="div" />
                </div>
                <div>
                  <label htmlFor="statement">Statement of Purpose</label>
                  <Field as="textarea" name="statement" />
                  <ErrorMessage name="statement" component="div" />
                </div>
              </div>
            )}

            <div className="form-navigation">
              {currentStep > 0 && (
                <button type="button" onClick={handleBack}>
                  Back
                </button>
              )}
              {currentStep < stepValidationSchemas.length - 1 && (
                <button type="button" onClick={() => handleNext(values, setTouched, validateForm)}>
                  Next
                </button>
              )}
              {currentStep === stepValidationSchemas.length - 1 && (
                <button type="submit" disabled={isSubmitting}>
                  Submit Application
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Apply;
