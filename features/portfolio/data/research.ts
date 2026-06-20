import type { Research } from '../types/research';

export const RESEARCH: Research[] = [
  {
    id: 'pavs',
    title: 'PAVS',
    period: {
      start: '2026',
      end: 'Present',
    },
    skills: [
      'PyTorch',
      'Deep Learning',
      'Computer Vision',
      'Explainable AI',
      'Physics-Informed AI',
      'Vision Transformers',
      'DINOv2',
      'Cross-Attention',
      'Fuzzy Logic',
      'ANFIS',
      'Environmental AI',
      'Research',
    ],
    status: 'under review',
    description: `Developed PAVS (Physics-Anchored Visual Saliency), a novel explainable AI framework for microplastic contamination assessment using UV fluorescence imagery.
- Introduces a Physics-Anchored Cross-Attention mechanism that fuses seven physics-derived contamination descriptors with DINOv2 visual representations.
- Utilizes Adaptive Neuro-Fuzzy Inference System (ANFIS) generated soft-label supervision to model contamination uncertainty and boundary ambiguity.
- Proposes Physics-Anchored Visual Saliency (PAVS), an intrinsic XAI method derived directly from cross-attention weights for physically grounded explanations.
- Achieved 94.0% classification accuracy and outperformed conventional fusion, ResNet-18, and visual-only transformer baselines.
- Demonstrated superior explainability with the highest faithfulness score while maintaining near-zero computational overhead for real-time environmental monitoring.
`,
    logo: `https://static.vecteezy.com/system/resources/previews/023/079/184/non_2x/physics-icon-molecule-illustration-sign-nucleus-and-atoms-symbol-science-logo-vector.jpg`,
    isExpanded: false,
    link: '',
  },
  {
    id: 'voice-disorder-ensemble',
    title: 'Boosted ViT for Laryngeal and Neurological Voice Disorders',
    period: {
      start: '2025',
      end: '2025',
    },
    skills: [
      'PyTorch',
      'Deep Learning',
      'Computer Vision',
      'Vision Transformers',
      'DINOv3',
      'MaxViT',
      'EVA-02',
      'Ensemble Learning',
      'Temperature Scaling',
      'Healthcare AI',
      'Voice Pathology',
      'Mel-Spectrogram Analysis',
      'Research',
    ],
    status: 'accepted',
    description: `Developed an advanced deep learning framework for automatic classification of six laryngeal and neurological voice disorders using mel-spectrogram representations.
- Fine-tuned and evaluated three state-of-the-art Vision Transformer architectures: DINOv3, MaxViT, and EVA-02.
- Proposed a Boosted Weighted Voting ensemble enhanced with Temperature Scaling calibration to improve prediction reliability and classification accuracy.
- Achieved 86.49% classification accuracy across six pathological voice conditions using data from the Saarbrücken Voice Database (SVD) and Italian Parkinson's Voice and Speech datasets.
- Submitted to Neural Computing and Applications (Springer, Q1 Journal) and currently undergoing peer-review revision process.
`,
    logo: `https://cdn.dribbble.com/userupload/42562034/file/original-40c6f8a325aaf2964eb06167feadc78b.png`,
    isExpanded: false,
    link: 'https://github.com/Sree14hari/Spectrogram-VisionTransformer',
  },
  {
    id: 'crda',
    title: 'CRDA',
    period: {
      start: '2026',
      end: 'Present',
    },
    link: 'https://github.com/Sree14hari/CRDA',
    skills: [
      'PyTorch',
      'Deep Learning',
      'Computer Vision',
      'Explainable AI',
      'Research',
      'CoAtNet',
      'ResNet',
      'CaiT',
      'Healthcare AI',
    ],
    status: 'accepted',
    description: `Currently developing Cross-Reasoning Disagreement Analysis (CRDA), a novel uncertainty quantification framework for pathological voice classification.
- Combines ResNet, CoAtNet, and CaiT architectures to capture both local acoustic features and long-range temporal dependencies.
- Introduces a multi-view uncertainty scoring mechanism that measures spatial confidence, temporal instability, and decision entropy.
- Designed to improve the reliability and explainability of AI-assisted voice pathology diagnosis for clinical applications.
`,
    logo: `https://thumbs.dreamstime.com/b/explainability-ethical-ai-color-icon-vector-illustration-sign-isolated-symbol-373898034.jpg`,
    isExpanded: false,
  },
  {
    id: 'ada-xai',
    title: 'ADA-XAI: Adaptive XAI',
    period: {
      start: '08.2025',
      end: '03.2026',
    },
    link: 'https://github.com/Sree14hari/ADA-XAI-MRI.git',
    skills: ['PyTorch', 'XAI', 'Transformers', 'Deep Learning'],
    status: 'published',
    description: `An Adaptive Faithfulness-Driven Explainable AI for Brain Tumor MRI Classification.
Unlike conventional CNN-only or Transformer-only systems, ADA-XAI dynamically combines:
- Global semantic understanding from EVA-02
- Local irregular tumor morphology extraction from DCNN

The framework also introduces an Adaptive XAI mechanism that intelligently selects between:
- Grad-CAM
- CAD-GMAR (Cross Attention Gradient-Driven Multi-Head Attention Rollout)
based on real-time faithfulness evaluation.
`,
    logo: `https://t4.ftcdn.net/jpg/01/35/12/05/360_F_135120584_uEIrpluPF2vynYH9OFx1UNAd00g0nydX.jpg`,
    isExpanded: false,
  },
];
