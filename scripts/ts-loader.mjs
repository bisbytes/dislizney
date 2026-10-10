// Lets `node --test` load the app's TypeScript: resolves the `@/` alias and extensionless imports.
import { existsSync, statSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = pathToFileURL(fileURLToPath(new URL('../src/', import.meta.url)));

export async function resolve(specifier, context, next) {
  let target = specifier;
  if (specifier.startsWith('@/')) target = new URL(specifier.slice(2), root).href;
  else if (specifier.startsWith('.') && context.parentURL) target = new URL(specifier, context.parentURL).href;
  else return next(specifier, context);

  for (const candidate of [target, `${target}.ts`, `${target}.tsx`, `${target}/index.ts`]) {
    const path = fileURLToPath(candidate);
    if (existsSync(path) && statSync(path).isFile()) return next(candidate, context);
  }
  return next(specifier, context);
}
