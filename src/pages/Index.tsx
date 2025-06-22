import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/UserLogin/LoginForm';

/**
 * IndexPage serves as the main entry point for the user login view.
 * It composes the `MainAppLayout` and the `LoginForm` to create the complete page.
 * 
 * The `MainAppLayout` provides the overall page structure, centering the content vertically and horizontally.
 * The `LoginForm` component contains all the form logic, fields, and actions for user authentication.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
