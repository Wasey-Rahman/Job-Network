import React from 'react';
import Navbar from '../Navbar/Navbar';

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='font-bold text-center text-2xl'>Some Question And Answer</h1>
            <h2 className='font-bold text-lg text-blue-600'>1)When context API is used?</h2>
            <p>The Context API is utilized in React to share information between components without having to pass props physically down the component tree.It is ordinarily utilized when different components in a React application require to get  to the same information, such as client verification status, subject settings, or dialect inclination.It makes less demanding to oversee state and maintain a strategic distance from prop penetrating, which can make the code simpler to examined and keep up. In any case, it ought to be utilized wisely, as abuse can lead to a confounding and hard-to-manage codebase. </p>

            <h2 className='font-bold text-lg text-blue-600'>2)What is custom hook in react?</h2>
            <p>A custom hook in Respond may be a JavaScript work that employments the built-in snares (such as useState, useEffect, and useContext) to typify and reuse stateful rationale over components. It permit you to unique absent complex logic and usefulness, making it simpler to make reusable code.Custom hook take after the naming tradition of utilizing the utilize prefix in their title and can be called from any utilitarian component.By utilizing custom hook, we can keep our code organized, decrease code duplication, and make it less demanding to preserve and overhaul our React applications.</p>

            <h2 className='font-bold text-lg text-blue-600'>3)What is useRef and for which work it is used?</h2>
            <p>useRef could be a built-in hook in React that permits us to make a variable reference that continues over component renders. It returns a variable protest with a current property that can be relegated any esteem.
            useRef can be utilized for a assortment of errands, counting:
            (i)Getting to DOM components: We will be able utilize useRef to reference a DOM component and access its properties and strategies straightforwardly. Typically valuable for setting center on an input component, measuring the size of an component, or activating an liveliness.(ii)Putting away variable values: We will use useRef to store a esteem that continues over component renders, but doesn't trigger a re-render when it changes. This will be valuable for putting away values that are costly to compute, or for executing rationale that requires changeable state </p>

            <h2 className='font-bold text-lg text-blue-600'>4)What is useMemo and for which work it is used?</h2>
            <p>useMemo could be a built-in hook in React that permits us to memoize the result of a work and cache it so that it is as it were recomputed when its dependencies change. It returns a memoized esteem that we just can utilize in your component.We will utilize useMemo to optimize execution by dodging pointless re-computations of costly calculations or complex rationale. useMemo is especially valuable for optimizing rendering in huge records or tables.useMemo can be utilized for a assortment of assignments, counting costly calculations, sifting and sorting information, and producing complex markup. It may be a capable device for optimizing execution in React applications.</p>
        </div>
    );
};

export default Blog;