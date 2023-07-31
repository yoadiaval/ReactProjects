import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "sdfsd",
      label: "Can I use react on a project",
      content:
        "you can use react in any project you want, you can use react in any project you want, you can use react in any project you want,you can use react in any project you want",
    },
    {
      id: "sdfsdf",
      label: "Can I use react on a project",
      content:
        "you can use react in any project you want, you can use react in any project you want, you can use react in any project you want,you can use react in any project you want",
    },
    {
      id: "sad",
      label: "Can I use react on a project",
      content:
        "you can use react in any project you want, you can use react in any project you want, you can use react in any project you want,you can use react in any project you want",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
