import React, { useEffect, useRef } from 'react';
import { typeBarGraphics } from '../../../TypeTypeScript/type';
import * as d3 from "d3"; 

//Componente graphics D3js
const BarGraphics: React.FC<typeBarGraphics> = ({data}) => {

    const GraphicRef = useRef(null);

    useEffect(() => {

        // Reference to the graph node
        const chartNode = GraphicRef.current;

        // Cleaning graphs that were previously generated
        d3.select(chartNode).selectAll('*').remove();

        // Chart Size Settings
        const width = 800;
        const height = 400;
        const marginTop = 30;
        const marginRight = 20;
        const marginBottom = 80;
        const marginLeft = 40;

        // Create the x scale for the states
        const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.state))
        .range([marginLeft, width - marginRight])
        .padding(0.1);

        // Create the scale y for the number of citizens
        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.total_evaluations) || 0])
            .range([height - marginBottom, marginTop]);

         // Create a color scale based on the domain of the states
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(data.map((d) => d.state));
        
        // Create the SVG container
        const svg = d3
            .select(chartNode)
            .attr('width', width)
            .attr('height', height);

        // Add bars to the chart
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

        // Add axes to the chart
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

    //Returning values
    return <svg ref={GraphicRef}></svg>;

}

export default BarGraphics