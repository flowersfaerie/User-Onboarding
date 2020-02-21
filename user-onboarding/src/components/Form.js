import React from 'react';
import { withFormik, Form, Field } from 'formik';


const Form = () => {
    return
        <Form>
            <Label>
                Name
                <Field type="text" name="email" placeholder="Enter your name" />
            </Label>
            <Label>
                Email
                <Field type="email" name="email" placeholder="Enter your email" />
            </Label>
            <Label>
                Password
                <Field type="password" name="password" placeholder="Enter your password" />
            </Label>
            <Label>
                Gender
                <Field as="select" name="gender">
                    <option disabled>Select you chosen gender ID</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Transgender Woman">Transgender Woman</option>
                    <option value="Transgender Man">Transgender Man</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="AGender">AGender</option>
                    <option value="Other Gender ID">Other Gender ID</option>
                </Field>
            </Label>
            <Label>
                Terms of Service
                <Field type="checkbox" name="tos" checked={setNestedObjectValues.tos} />
            </Label>
            <button>Submit</button>
        </Form>
}

export default Form;