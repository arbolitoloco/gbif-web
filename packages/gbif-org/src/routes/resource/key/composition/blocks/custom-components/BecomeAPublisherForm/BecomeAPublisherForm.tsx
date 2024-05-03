import { ClientSideOnly } from '@/components/ClientSideOnly';
import { Step, StepperForm } from '@/components/StepperForm';
import { withIndex } from '@/utils/withIndex';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { BlockContainer } from '../../_shared';
import {
  OptionalStringSchema,
  RequiredEmailSchema,
  RequiredStringSchema,
  createTypedCheckboxField,
  createTypedTextField,
} from '../_shared';
import { CheckRegistration } from './steps/CheckRegistration';
import { Contacts } from './steps/Contacts';
import { Endorsment } from './steps/Endorsment';
import { GbifProjects } from './steps/GbifProjects';
import { OrganizationAddress } from './steps/OrganizationAddress';
import { OrganizationDetails } from './steps/OrganizationDetails';
import { TermsAndConditions } from './steps/TermsAndConditions';
import { WhatAndHow } from './steps/WhatAndHow';
import { useSuggestedNodeCountry } from './useSuggestedNodeCountry';

const ContactSchema = z.object({
  firstName: RequiredStringSchema,
  lastName: RequiredStringSchema,
  email: RequiredEmailSchema,
  phone: OptionalStringSchema,
});

const Schema = z.object({
  checkRegistration: z.boolean(),
  termsAndConditions: z.object({
    dataPublishederAgreement: z.boolean(),
    confirmRegistration: z.boolean(),
    dataWillBePublic: z.boolean(),
  }),
  organizationDetails: z.object({
    name: RequiredStringSchema,
    homePage: z.string().url().optional().or(z.literal('')),
    email: z.string().email().optional().or(z.literal('')),
    phone: OptionalStringSchema,
    logo: z.string().url().optional().or(z.literal('')),
    description: RequiredStringSchema,
  }),
  organizationAddress: z.object({
    address: RequiredStringSchema,
    city: RequiredStringSchema,
    province: OptionalStringSchema,
    postalCode: OptionalStringSchema,
    country: RequiredStringSchema,
    coordinates: z.object({
      lat: z.number(),
      lon: z.number(),
    }),
  }),
  endorsingNode: z.string(),
  gbifProjects: z.discriminatedUnion('type', [
    z.object({ type: z.literal('yes'), projectIdentifier: OptionalStringSchema }),
    z.object({ type: z.literal('no') }),
  ]),
  mainContact: ContactSchema,
  extraContacts: z.object({
    administrative: z.boolean().optional(),
    technical: z.boolean().optional(),
  }),
  administrativeContact: ContactSchema.optional(),
  technicalContact: ContactSchema.optional(),
  whatAndHow: z.object({
    resourceMetadata: z.boolean().optional(),
    checklistData: z.boolean().optional(),
    occurrenceOnlyData: z.boolean().optional(),
    samplingEventData: z.boolean().optional(),
    description: RequiredStringSchema,
    serverCapable: z.enum(['yes', 'no']),
    toolPlanned: z.enum(['yes', 'no']),
    doYouNeedHelpPublishing: z.enum(['yes', 'no']),
  }),
});

export type Inputs = z.infer<typeof Schema>;

export const CheckboxField = createTypedCheckboxField<Inputs>();
export const TextField = createTypedTextField<Inputs>();

export function BecomeAPublisherForm() {
  const form = useForm<Inputs>({
    resolver: zodResolver(Schema),
    mode: 'onBlur',
  });

  const onSubmit = useMemo(
    () =>
      form.handleSubmit((data: Inputs) => {
        fetch('http://localhost:4001/forms/become-a-publisher', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.ok) {
              alert('Organization registered');
              // form.reset();
            } else {
              alert('Failed to register organization');
            }
          })
          .catch((error) => {
            console.error(error);
            alert('Failed to register organization');
          });
      }),
    [form]
  );

  const { suggestedNodeCountry, updateSuggestedNodeCountry } = useSuggestedNodeCountry();

  const STEPS: Step[] = useMemo(
    () =>
      withIndex([
        {
          title: 'Check Registration',
          component: CheckRegistration,
          validationPath: 'checkRegistration',
        },
        {
          title: 'Terms & Conditions',
          component: TermsAndConditions,
          fieldset: true,
          validationPath: 'termsAndConditions',
        },
        {
          title: 'Organization Details',
          component: OrganizationDetails,
          fieldset: true,
          validationPath: 'organizationDetails',
        },
        {
          title: 'Organization Address',
          component: () => (
            <OrganizationAddress updateSuggestedNodeCountry={updateSuggestedNodeCountry} />
          ),
          fieldset: true,
          validationPath: 'organizationAddress',
        },
        {
          title: 'Endorsement',
          component: () => <Endorsment suggestedNodeCountry={suggestedNodeCountry} />,
          fieldset: true,
          validationPath: 'endorsingNode',
        },
        {
          title: 'GBIF projects',
          component: GbifProjects,
          heading: 'Are you associated with a project funded by a GBIF programme?',
          validationPath: 'gbifProjects',
        },
        {
          title: 'Contacts',
          component: Contacts,
          fieldset: true,
          validationPath: ['mainContact', 'administrativeContact', 'technicalContact'],
        },
        { title: 'What and How', component: WhatAndHow, fieldset: true },
      ]),
    [updateSuggestedNodeCountry, suggestedNodeCountry]
  );

  return (
    <BlockContainer>
      <ClientSideOnly>
        <StepperForm form={form} onSubmit={onSubmit} steps={STEPS} />
      </ClientSideOnly>
    </BlockContainer>
  );
}