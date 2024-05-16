import { TextField } from '../HostedPortalForm';

export function PrimaryContact() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <TextField name="primaryContact.name" label="Name" required />

        <TextField name="primaryContact.email" label="Email" required />
      </div>

      <TextField
        name="primaryContact.github"
        description="Please provide your GitHub username if possible. We will use it to give you access to follow the progress of your application"
        label="GitHub username"
      />
    </div>
  );
}
