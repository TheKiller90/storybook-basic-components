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

export const MyLabel = ({
    label='No Label',
    size='normal',
    allCaps=false,
    color='primary',
    fontColor='',
    backgroundColor='transparent'
}:MyLabelProps) => {
  return (
    <span
      className={`label ${ size } text-${ color }`}
      style={{ color: fontColor, backgroundColor }}
    >{ allCaps ? label.toUpperCase() : label }</span>
  );
};

export default MyLabel;