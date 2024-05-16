import { HyperText } from '@/components/HyperText';
import { Button } from '@/components/ui/button';

export function Citation({ data = {}, loading, error, ...props }) {
  const { dataset } = data;
  const doi = dataset.doi;
  return dataset?.citation?.text ? (
    <div>
      <HyperText className="prose" text={dataset.citation.text} />
      {doi && (
        <div style={{ marginTop: '1em' }}>
          <Button asChild variant="outline">
            <a
              href={`https://data.crosscite.org/application/x-research-info-systems/${doi}`}
              className="me-1"
            >
              RIS
            </a>
          </Button>
          <Button asChild variant="outline">
            <a  href={`https://data.crosscite.org/application/x-bibtex/${doi}`}>BibTex</a>
          </Button>
        </div>
      )}
    </div>
  ) : null;
}
