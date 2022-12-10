/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Mensaje que se mostrará con la etiqueta
     */
    label: string;
    /**
     * Tamaño por defecto del componente
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * ¿Capitalizado?
     */
    allCaps?: boolean;
    /**
     * Colores básicos del botón
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Colores de fuente personalizado
     */
    fontColor?: string;
    /**
     * Colores de fondo personalizado
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
