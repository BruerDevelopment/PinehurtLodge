"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Section } from "../../../../styles/Section";

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

interface SubSection {
  id: string;
  title: string;
  description?: string;
  image?: string;
  items: ChecklistItem[];
}

interface MainSection {
  id: string;
  title: string;
  subsections: SubSection[];
}

interface ChecklistState {
  [itemId: string]: boolean;
}

const CHECKLIST_DATA: MainSection[] = [
  {
    id: "teardown",
    title: "Teardown",
    subsections: [
      {
        id: "collect-towels",
        title: "Collect Towels",
        items: [
            { id: "upstairs-master-bath", text: "Upstairs Master Bathroom", completed: false },
            { id: "upstairs-hallway-bath", text: "Upstairs Hallway Bathroom", completed: false },
            { id: "downstairs-bath", text: "Downstairs Bathroom", completed: false },
        ],
      },
      {
        id: "strip-bed-sheets",
        title: "Strip Bed Sheets",
        items: [
          { id: "strip-upstairs-master", text: "Upstairs Master Bedroom", completed: false },
          { id: "strip-upstairs-secondary", text: "Upstairs Secondary Bedroom", completed: false },
          { id: "strip-downstairs-master", text: "Downstairs Master Bedroom", completed: false },
          { id: "strip-downstairs-secondary", text: "Downstairs Secondary Bedroom", completed: false },
          { id: "strip-downstairs-trundle", text: "Downstairs Trundle Bed", completed: false },
        ],
      },
      {
        id: "start-laundry",
        title: "Start Laundry",
        items: [
          { id: "start-laundry-machines", text: "Start the washing machines", completed: false },
        ],
      }
    ],
  },
  {
    id: "clean",
    title: "Clean",
    subsections: [
      {
        id: "hot-tub",
        title: "Hot Tub",
        description:
          "Maintenance entails adding shock and chlorine tablets to maintain the clarity and smell of the water. If the water smells or is murky, it is time to replace the water. Running the jets during or after adding chemicals can help to spread and mix the chemicals. The hot tub chemicals are not instant and take effect over time, so add chemicals early and check status after the clean.",
        items: [
          { id: "hot-tub-chemicals", text: "Add chemicals (shock & chlorine)", completed: false },
          { id: "hot-tub-ph", text: "Check Ph levels", completed: false },
          { id: "hot-tub-jets", text: "Run the jets", completed: false },
          { id: "hot-tub-heat", text: "Reduce heat to 102", completed: false },
        ],
      },
      {
        id: "kitchen",
        title: "Kitchen",
        items: [
          { id: "kitchen-microwave", text: "Clean Microwave", completed: false },
          { id: "kitchen-fridge", text: "Clean Fridge", completed: false },
          { id: "kitchen-coffee", text: "Clean & Reset Coffee Makers", completed: false },
          { id: "kitchen-dishwasher", text: "Empty Dishwasher", completed: false },
          { id: "kitchen-dishes", text: "Check for Remaining Dishes (in both upstairs and downstairs sinks)", completed: false },
          { id: "kitchen-soaps", text: "Refill Hand & Dish Soaps", completed: false },
          { id: "kitchen-paper-towels", text: "Check / Replace Paper Towels", completed: false },
          { id: "kitchen-sink-condition", text: "Check Condition of Sinks (for grime or remaining food)", completed: false },
          { id: "kitchen-stove", text: "Wipe Down Stove & Countertop Surfaces", completed: false },
          { id: "kitchen-sink-rags", text: "Place Sink Rags In Designated Spots", completed: false },
        ],
      },
      {
        id: "info-table",
        title: "Info Table",
        items: [
          { id: "info-gift-cards", text: "Check / Replace Gift Cards (ensure the gift cards have Pinehurst Lodge signature)", completed: false },
          { id: "info-photos", text: "Check Photos & Cash-Jar", completed: false },
          { id: "info-checkout", text: "Stage The Checkout Instructions & Guest Log-Book", completed: false },
        ],
      },
      {
        id: "front-door-porch",
        title: "Front Door / Porch",
        items: [
          { id: "front-door-code", text: "Set A New Guest Door Code", completed: false },
          { id: "front-door-clear", text: "Clear Dirt / Snow / Debris", completed: false },
        ],
      },
      {
        id: "grill",
        title: "Grill",
        items: [
          { id: "grill-surfaces", text: "Check cooking surfaces and remove grime with brush", completed: false },
          { id: "grill-outside", text: "Wipe down the outside surfaces", completed: false },
        ],
      },
      {
        id: "dining-room",
        title: "Dining Room",
        items: [
          { id: "dining-table", text: "Wipe Down Table & Chairs", completed: false },
        ],
      },
      {
        id: "living-room",
        title: "Living Room",
        items: [
          { id: "living-glass-tables", text: "Wipe Glass Tables", completed: false },
          { id: "living-tissues", text: "Check For Tissues & Moisturizer", completed: false },
          { id: "living-remotes", text: "Stage TV & Light Remotes", completed: false },
          { id: "living-blankets", text: "Fold & Stage Blankets", completed: false },
          { id: "living-accounts", text: "Signout of Personal Accounts", completed: false },
        ],
      },
      {
        id: "fireplace",
        title: "Fireplace",
        items: [
          { id: "check-fireplace-note", text: "Check Fireplace Usage Laminate Note", completed: false },
          { id: "check-fireplace-fuel", text: "Ensure Fireplace Lighter Has Fuel", completed: false },
          { id: "check-fireplace-ash", text: "Check / Remove Excess Fireplace Ash", completed: false },
        ],
      },
      {
        id: "bathrooms",
        title: "Bathrooms",
        description:"Clean: Mirrors, Counter, Sink, Toilet, Bath / Shower \nCheck: Hand soap, shower soaps, toilet paper (replace low rolls) \n\nLeave one bathroom until the very end for disposing of the mop water",
        items: [
          { id: "bathrooms-upstair-master", text: "Upstairs Master Bathrooms", completed: false },
          { id: "bathrooms-downstairs", text: "Downstairs Bathrooms", completed: false },
          { id: "bathrooms-upstair-hallway", text: "Upstairs Hallway Bathrooms", completed: false },
        ],
      },
      {
        id: "replace-bed-sheets",
        title: "Replace Bed Sheets",
        items: [
          { id: "replace-upstairs-master", text: "Upstairs Master Bedroom", completed: false },
          { id: "replace-upstairs-secondary", text: "Upstairs Secondary Bedroom", completed: false },
          { id: "replace-downstairs-master", text: "Downstairs Master Bedroom", completed: false },
          { id: "replace-downstairs-secondary", text: "Downstairs Secondary Bedroom", completed: false },
          { id: "replace-downstairs-trundle", text: "Downstairs Trundle Bed", completed: false },
        ],
      },
      {
        id: "towels",
        title: "Towels",
        description:"Clean: Mirrors, Counter, Sink, Toilet, Bath / Shower \nCheck: Hand soap, shower soaps, toilet paper (replace low rolls) \n\nLeave one bathroom until the very end for disposing of the mop water",
        items: [
          { id: "towels-upstair-master", text: "Upstairs Master Bathrooms", completed: false },
          { id: "towels-downstairs", text: "Downstairs Bathrooms", completed: false },
          { id: "towels-upstair-hallway", text: "Upstairs Hallway Bathrooms", completed: false },
          { id: "towels-hottub", text: "Hot Tub Towels", completed: false },
        ],
      },
      {
        id: "bedroom-mints",
        title: "Mints",
        items: [
          { id: "bedroom-mints-upstairs-master", text: "Upstairs Master Bedroom", completed: false },
          { id: "bedroom-mints-upstairs-secondary", text: "Upstairs Secondary Bedroom", completed: false },
          { id: "bedroom-mints-downstairs-master", text: "Downstairs Master Bedroom", completed: false },
          { id: "bedroom-mints-downstairs-secondary", text: "Downstairs Secondary Bedroom", completed: false },
        ],
      },
      {
        id: "floor-cleaning",
        title: "Floors",
        description:"The floors need to be vacuumed and mopped. This stage also includes the floors to the bathrooms and bedrooms.",
        items: [
          { id: "floor-cleaning-upstairs", text: "Upstairs", completed: false },
          { id: "floor-cleaning-downstairs", text: "Downstairs", completed: false },
        ],
      },
      {
        id: "garage",
        title: "Garage & Waste",
        items: [
          { id: "recycling", text: "Empty Recycling Bin", completed: false },
          { id: "garage-trash", text: "Check Garage Trash Bins", completed: false },
        ],
      },
    ],
  },
];

function useChecklistState(storageKey: string) {
  const [state, setState] = useState<ChecklistState>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        setState(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse checklist state from storage", e);
      }
    }
    setMounted(true);
  }, [storageKey]);

  const saveToStorage = (newState: ChecklistState) => {
    setState(newState);
    localStorage.setItem(storageKey, JSON.stringify(newState));
  };

  const toggleItem = (itemId: string) => {
    const newState = {
      ...state,
      [itemId]: !state[itemId],
    };
    saveToStorage(newState);
  };

  const resetAll = () => {
    saveToStorage({});
  };

  return { state, mounted, toggleItem, resetAll };
}

const MainSectionTitle = styled.h2`
  margin-top: 32px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #333;
  padding-bottom: 8px;
`;

const SubSectionContainer = styled.div`
  width: 100%;
  margin-bottom: 28px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
`;

const SubSectionTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const Description = styled.pre`
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 1.6;
  color: black;
  text-wrap: wrap;
`;

const Image = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 16px;
`;

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li<{ completed: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  text-decoration: ${(p) => (p.completed ? "line-through" : "none")};
  color: ${(p) => (p.completed ? "#999" : "#333")};
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-top: 2px;
  flex-shrink: 0;
`;

const ItemText = styled.span`
  flex: 1;
  font-size: 14px;
`;

const ControlsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  padding-top: 16px;
  border-top: 2px solid #333;
`;

const Stats = styled.div`
  font-size: 14px;
  color: #666;
`;

const ResetBtn = styled.button`
  padding: 10px 16px;
  background-color: #999;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #777;
  }
`;

export function ClientContent() {
  const { state, mounted, toggleItem, resetAll } = useChecklistState("cleaning-checklist-v2");

  if (!mounted) return null;

  const totalItems = CHECKLIST_DATA.reduce(
    (sum, section) =>
      sum + section.subsections.reduce((subSum, subsection) => subSum + subsection.items.length, 0),
    0
  );

  const completedItems = Object.values(state).filter(Boolean).length;

  return (
    <>
      <main>
        <Section varient={2}>
          <h1 className="section-heading">Pinehurst Lodge Cleaning Checklist</h1>
        </Section>

        <Section varient={2}>
          {CHECKLIST_DATA.map((mainSection) => (
            <div key={mainSection.id} style={{width:"100%"}}>
              <MainSectionTitle>{mainSection.title}</MainSectionTitle>

              {mainSection.subsections.map((subsection) => (
                <SubSectionContainer key={subsection.id}>
                  <SubSectionTitle>{subsection.title}</SubSectionTitle>
                  {subsection.description && (
                    <Description>{subsection.description}</Description>
                  )}
                  {subsection.image && <Image src={subsection.image} alt={subsection.title} />}
                  <ItemsList>
                    {subsection.items.map((item) => (
                      <ListItem key={item.id} completed={!!state[item.id]}>
                        <Checkbox
                          type="checkbox"
                          checked={!!state[item.id]}
                          onChange={() => toggleItem(item.id)}
                        />
                        <ItemText>{item.text}</ItemText>
                      </ListItem>
                    ))}
                  </ItemsList>
                </SubSectionContainer>
              ))}
            </div>
          ))}

          <ControlsBar>
            <Stats>
              {completedItems} of {totalItems} items completed
            </Stats>
            {completedItems > 0 && (
              <ResetBtn onClick={resetAll}>Reset All</ResetBtn>
            )}
          </ControlsBar>
        </Section>
      </main>
    </>
  );
}