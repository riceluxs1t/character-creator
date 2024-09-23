import Page from "../Page";
import styled from "styled-components";

import Heading from "../Heading";
import Paragraph from "../Paragraph";
import PageMarker from "../PageMarker";

const Page3 = (props) => {
  return (
    <Page>
      <PageMarker>5/6</PageMarker>

      <Heading>이제 노동민에게</Heading>

      <Paragraph>
        동민. 세상에는 자신의 삶이라는 경주에서 갈 만큼 가는 사람도 있고, 갈
        데까지 가는 사람도 있고, 그러고도 더 가버리는 사람들이 있는 것 같아.
        나는 이 세 가지 자세 중 그 어느 걸 택해도 썩 괜찮게 살거라 생각해.
      </Paragraph>
      <Paragraph>
        뭐든지 갈 만큼만 가는 사람은 인생의 산해진미를 두루 경험해 볼 수 있을
        거야. 패트릭형이 갈 만큼만 가는 사람인지는 모르겠지만, 패트릭형처럼 많은
        걸 경험해 보는 거지.
      </Paragraph>
      <Paragraph>
        갈 데까지 가는 사람은 자신의 영역에서만큼은 남들이 경험하지 못한
        진수성찬을 배불리 먹겠지. 파리 올림픽 1500m에서 금메달을 딴 Cole Hocker
        기억나? 걔가 역전 우승할 때 느낀 짜릿한 감정을 아마 우리는 평생 모를
        거야.
      </Paragraph>
      <Paragraph>
        한 영역에서 갈 데까지 가고, 그러고도 더 가버리는 사람은 사회에서 이름을
        날리는 예컨대 초밥 장인 같은 삶을 살겠지. 아마 돈 많이 벌 거야. 나는
        용기가 없어서 망설이다가 전혀 앞으로 가지 않는 삶을 빼고는 다 괜찮다고
        생각해.
      </Paragraph>
      <Paragraph>
        그러나 내 멋대로 살 수 있는 내 삶에서는, 나는 대체로 갈 데까지 가려는
        쪽에 가까워. 나는 대학원 문턱에도 가본 적이 없지만 아마도 PhD를 따려면
        자신의 연구 주제에 대해서 갈 데까지 가봐야 하지 않을까. 그건 (아마 너도
        공감할 텐데) 생각만해도 힘든 일이야. 그러려면 자신의 삶을 어느 정도는
        맷돌처럼 한 가지 영역에 갈아 넣어야 하니까.
      </Paragraph>
      <Paragraph>
        그래서 나도 갈 데까지 가려는 쪽에 가깝다고 말을 하면서도, 늘 갈 데까지
        가지는 않고, 적당히 갈 만큼만 가버리는 사람이야. 그렇지만 이번 무진장
        시간 동안에는 너와 패트릭 형의 도움을 받아서 갈 데까지 가보려고 해. 내
        의지와 상관없이 갈 데까지 가지 '못'하는 한이 있더라도, 내가 갈 데까지
        가지 '않'는 선택은 하지 않게 도와줘.
      </Paragraph>
      <Paragraph>
        동민. 삶을 음식에 비유하자면 아마 아이스크림에 가깝지 않을까. 나는 그
        아이스크림이 녹기 전에 이왕이면 최대한 신나게 빨아먹고 싶어. 칼로리에
        대한 죄책감도 전혀 느끼지 않고, 츄루르릅 소리를 내면서도 남 신경 쓰지
        않을 거야. 무진장 기간 동안 우리가 맷돌처럼 진지하게 우리 시간을 갈아서
        콩국수같이 건강한 음식도 만들어 먹겠지만, 나는 우리가 아이스크림을
        빨듯이 별생각 없이 그 자체로 달콤한 시간도 더 많이 누렸으면 좋겠어. 마치
        이 편지를 주고받듯이.
      </Paragraph>
      <LastSentence>2024.9.20. 김남근</LastSentence>
    </Page>
  );
};

const LastSentence = styled.p`
  text-align: right;
  margin-top: 3em;
  margin-right: 140px;
`;

export default Page3;
