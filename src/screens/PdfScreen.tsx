import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Pdf from "../components/PdfScreen/Pdf";
import EmptySkeleton from "../components/PdfScreen/EmptySkeleton";
import ScreenWrapper from "../components/ui/ScreenWrapper";

const PdfScreen: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.items);
  const subscriber = useSelector((state: RootState) => state.subscriber);
  const sender = useSelector((state: RootState) => state.sender);
  const validItems = items.length > 0;
  const validSubscriber = subscriber.ico;
  const validSender = sender.senderIco;

  const data = validItems && validSubscriber && validSender;
  return (
    <ScreenWrapper>
      {data && <Pdf items={items} subscriber={subscriber} />}
      {!data && <EmptySkeleton />}
    </ScreenWrapper>
  );
};

export default PdfScreen;
