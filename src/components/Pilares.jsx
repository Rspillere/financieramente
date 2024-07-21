import { Accordion } from 'flowbite-react';

const Pilares = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>💳 Finanzas Personales</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            sint ducimus quisquam natus incidunt aut ipsam. Tenetur cumque,
            dicta quasi asperiores delectus ad doloribus, dolores enim iste illo
            recusandae sint?
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            quos?
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>💼 Inversiones</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo vitae
            beatae esse? Itaque, explicabo nesciunt.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a
              href="https://flowbite.com/figma/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Figma design system
            </a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            est!.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>🚀 Criptomonedas</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            assumenda quibusdam blanditiis sed, nemo placeat amet magnam omnis
            ratione odit?
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>📈 Trading</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            assumenda quibusdam blanditiis sed, nemo placeat amet magnam omnis
            ratione odit?
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default Pilares;
