import React, { useEffect, useRef } from 'react';
import { typeBarGraphics } from '../../../TypeTypeScript/type';
import * as d3 from "d3"; 

//Componente graphics D3js
const BarGraphics: React.FC<typeBarGraphics> = ({data}) => {

    const GraphicRef = useRef(null);

    useEffect(() => {

        // Referencia al nodo del gráfico
        const chartNode = GraphicRef.current;

        // Configuración del tamaño del gráfico
        const width = 800;
        const height = 400;
        const marginTop = 30;
        const marginRight = 20;
        const marginBottom = 80;
        const marginLeft = 40;

        // Crear la escala x para los estados
        const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.state))
        .range([marginLeft, width - marginRight])
        .padding(0.1);

        // Crear la escala y para la cantidad de ciudadanos
        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.total_evaluations) || 0])
            .range([height - marginBottom, marginTop]);

         // Crear una escala de colores basada en el dominio de los estados
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(data.map((d) => d.state));
        
        // Crear el contenedor SVG
        const svg = d3
            .select(chartNode)
            .attr('width', width)
            .attr('height', height);

        // Agregar barras al gráfico
        svg
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d) => xScale(d.state) || 0)
            .attr('y', (d) => yScale(d.total_evaluations))
            .attr('height', (d) => height - yScale(d.total_evaluations) - marginBottom)
            .attr('width', xScale.bandwidth())
            .attr('fill', (d) => colorScale(d.state))

        // Agregar ejes al gráfico
        svg
            .append('g')
            .attr('transform', `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(xScale))
            .selectAll('text')
            .attr('transform', 'rotate(-45)')
            .style('text-anchor', 'end')
            .style('font-family', 'Poppins')
            .style('font-size', '1em')

        svg
            .append('g')
            .attr('transform', `translate(${marginLeft},0)`)
            .call(d3.axisLeft(yScale))
            .selectAll('text')
            .style('font-family', 'Poppins')
            .style('font-size', '1.2em') 

    }, [data]);

    return <svg ref={GraphicRef}></svg>;

}

export default BarGraphics