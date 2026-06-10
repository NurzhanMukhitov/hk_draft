/**
 * Quick RFQ — React island (form state, drag/drop, validation, submit).
 *
 * Per Astro pattern, this is hydrated only where it matters
 * (the form). The surrounding navy section is rendered as plain HTML by the
 * parent .astro that wraps this component.
 *
 * Strings are passed in as a single `t` prop from the page-level dictionary
 * so we don't ship the bilingual map to the client more than once.
 */
import { useRef, useState } from 'react';

export interface QuickRFQStrings {
  label: string;
  h2: string;
  sub: string;
  lpn: string;
  lbrand: string;
  lmodel: string;
  lqty: string;
  lcountry: string;
  lemail: string;
  lfile: string;
  phpn: string;
  phbrand: string;
  phmodel: string;
  phqty: string;
  phcountry: string;
  phemail: string;
  phfile: string;
  cta: string;
  errPn: string;
  errEmail: string;
  okTag: string;
  okH: string;
  okP: string;
  okRef: string;
  again: string;
}

interface Props {
  t: QuickRFQStrings;
}

interface FormState {
  pn: string;
  brand: string;
  model: string;
  qty: string;
  country: string;
  email: string;
}

const empty: FormState = { pn: '', brand: '', model: '', qty: '', country: '', email: '' };

export default function QuickRFQ({ t }: Props) {
  const [form, setForm] = useState<FormState>(empty);
  const [err, setErr] = useState<{ pn?: string; email?: string }>({});
  const [sent, setSent] = useState(false);
  const [ref, setRef] = useState<string>('');
  const [fileName, setFileName] = useState('');
  const [over, setOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof err = {};
    if (!form.pn.trim()) next.pn = t.errPn;
    if (!form.email.trim() || !form.email.includes('@')) next.email = t.errEmail;
    setErr(next);
    if (Object.keys(next).length === 0) {
      // Front-end only for now. Wire to Resend / Web3Forms in production iteration.
      setRef(`AXP-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      setSent(true);
    }
  };

  const reset = () => {
    setSent(false);
    setForm(empty);
    setErr({});
    setFileName('');
  };

  const pickFile = () => fileInputRef.current?.click();
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFileName(f ? f.name : '');
  };
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) setFileName(f.name);
  };

  if (sent) {
    return (
      <div class="rfq-card rfq-confirm">
        <div class="tag">{t.okTag}</div>
        <h3>{t.okH}</h3>
        <p>{t.okP}</p>
        <div class="ref">
          {t.okRef}: {ref}
        </div>
        <div style={{ marginTop: 'var(--space-5)' }}>
          <button type="button" class="btn btn-link" onClick={reset}>
            {t.again}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form class="rfq-card" onSubmit={submit} noValidate>
      <div class="field">
        <label>{t.lpn}</label>
        <input
          class={'input' + (err.pn ? ' is-error' : '')}
          type="text"
          placeholder={t.phpn}
          value={form.pn}
          onChange={set('pn')}
        />
        {err.pn ? <div class="hint err">{err.pn}</div> : null}
      </div>

      <div class="field-row3">
        <div class="field">
          <label>{t.lbrand}</label>
          <input class="input" type="text" placeholder={t.phbrand} value={form.brand} onChange={set('brand')} />
        </div>
        <div class="field">
          <label>{t.lmodel}</label>
          <input class="input" type="text" placeholder={t.phmodel} value={form.model} onChange={set('model')} />
        </div>
        <div class="field">
          <label>{t.lqty}</label>
          <input class="input" type="text" placeholder={t.phqty} value={form.qty} onChange={set('qty')} />
        </div>
      </div>

      <div class="field-row">
        <div class="field">
          <label>{t.lcountry}</label>
          <input class="input" type="text" placeholder={t.phcountry} value={form.country} onChange={set('country')} />
        </div>
        <div class="field">
          <label>{t.lemail}</label>
          <input
            class={'input' + (err.email ? ' is-error' : '')}
            type="email"
            placeholder={t.phemail}
            value={form.email}
            onChange={set('email')}
          />
          {err.email ? <div class="hint err">{err.email}</div> : null}
        </div>
      </div>

      <div class="field">
        <label>{t.lfile}</label>
        <div
          class={'file-drop' + (over ? ' over' : '')}
          onClick={pickFile}
          onDragOver={(e) => {
            e.preventDefault();
            setOver(true);
          }}
          onDragLeave={() => setOver(false)}
          onDrop={onDrop}
          style={{ cursor: 'pointer', maxWidth: 'none' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              color: fileName ? 'var(--text-primary)' : 'var(--text-muted)',
            }}
          >
            {fileName || t.phfile}
          </span>
          <input ref={fileInputRef} type="file" onChange={onFileChange} style={{ display: 'none' }} />
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-2)', textAlign: 'center' }}>
        <button type="submit" class="btn btn-primary">
          {t.cta} →
        </button>
      </div>
    </form>
  );
}
