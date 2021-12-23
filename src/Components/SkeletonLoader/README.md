<h1>SKELETON LOADER COMPONENT</h1>

<h3>description</h3>
<p>Recibe como props un estado loading. Mientras es true renderiza Skeleton y cuando cambia a false renderiza el componente recibido en props como children</p>

<p>Permite configurar el tipo de skeleton, su animación, su color, su alto y ancho.</p>

<h3>props</h3>

<p>loading (bool) = true | false</p>
<p>variant (string) = 'text' | 'circular' | 'rectangular'</p>
<p>animation (string | bool) = 'wave' | 'pulse' | false</p>
<p>width (string | number) = '100%' | 500</p>
<p>height (string | number) = '100%' | 500</p>
<p>bgcolor (string) = 'blue' | 'grey.900' | '#ffffff'</p>
<p>children (component)</p>