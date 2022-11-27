import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-[1440px] mx-auto min-h-[70vh] my-[50px]">
      <div className="w-10/12 mx-auto">
        <h1 className="text-center text-4xl my-5 font-semibold text-primary">
          Blogs
        </h1>
        <div className="my-10">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8"
          >
            <div className="collapse-title text-xl font-medium">
              What are the different ways to manage a state in a React
              application?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Most common way to manage a state is useState. If the state is
                shared across different components it can be managed as a global
                state by context api. If we are fetching data from api which is
                server state, can be managed by React Query. Url state can be
                managed by React Router Hooks useHistory, useLocation.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8"
          >
            <div className="collapse-title text-xl font-medium">
              How does prototypical inheritance work?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Prototypical inheritance is a feature in javascript which is
                used to add methods and properties in objects. It is used to
                inherit properties and methods of objects from one to another.
                Each object has a property which holds a link to another object
                called its prototype.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8"
          >
            <div className="collapse-title text-xl font-medium">
              What is a unit test? Why should we write unit tests?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Unit test is a way of testing a unit to isolate a piece of code
                to test and run to determine if it works as intended. Unit
                testing ensures that all code meets quality standards before
                going to deployment.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8"
          >
            <div className="collapse-title text-xl font-medium">
              React vs. Angular vs. Vue?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                React is a UI building library of JavaScript and Angular and Vue
                is JavaScript Framework. Three of them has component-based
                architecture. Angular use real DOM but React and Vue use virtual
                DOM. Angular and Vue has two way data binding but React has one
                way data binding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
