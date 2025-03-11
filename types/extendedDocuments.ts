export interface ExtendedDocument extends Document {
  startViewTransition: (callback: () => Promise<void> | void) => ViewTransition;
}
