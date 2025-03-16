/**
 * Composants UI réutilisables
 * 
 * Ce fichier exporte uniquement les composants UI utilisés dans le projet
 */

// Composants directement importés
import OptimizedIcon from "./icon";
export { OptimizedIcon };
export { ScrollToTop } from "./scroll-to-top";
export { SectionTitle } from "./section-title";
export { IconLink } from "./icon-link";

// Composants utilisés via des imports directs
export { default as OptimizedImage } from "./image";
export { Button } from "./button";
export { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
export { Input } from "./input";
export { Label } from "./label";
export { Textarea } from "./textarea";
export { Sheet, SheetContent, SheetTrigger } from "./sheet";
export { toast } from "./use-toast"; 